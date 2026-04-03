import supabase, { supabaseUrl } from "./supabase";

export async function getCabins() {
  const { data, error } = await supabase.from("cabins").select("*");

  if (error) {
    console.error(error);
    throw new Error("there was i problem loading the cabins");
  }

  return data;
}

export async function deleteCabinApi(id) {
  const { error, data } = await supabase.from("cabins").delete().eq("id", id);
  if (error) {
    console.log(error);
    throw new Error("the cabin couldn't be deleted");
  }
  return data;
}

export async function createEditCabin(newCabin, id) {
  const hasImagePath = newCabin.image?.startsWith?.(supabaseUrl);

  const imageName = `${Math.random()}-${newCabin.image.name}`.replace("/", "");

  const imagePath = hasImagePath
    ? newCabin.image
    : `${supabaseUrl}/storage/v1/object/public/cabin-images/${imageName}`;

  //1)create / edit a cabin
  let query = supabase.from("cabins");

  // a)create
  if (!id) query = query.insert([{ ...newCabin, image: imagePath }]);

  // b)Edit
  if (id)
    query = query
      .update({ ...newCabin, image: imagePath })
      .eq("id", id)
      .select();

  const { data, error } = await query.select().single();
  if (error) {
    console.log(error);
    throw new Error("the cabin couldn't be created");
  }

  // 2)upload the image
  if (hasImagePath) return data;
  const { error: storageError } = await supabase.storage
    .from("cabin-images")
    .upload(imageName, newCabin.image);

  // 3) delete the cabin if there was an error uploading the image
  if (storageError) {
    await supabase.from("cabins").delete().eq("id", data.id);
    console.log(storageError);
    throw new Error(
      "Cabin image could not be uploaded and cabin could not be created",
    );
  }

  return data;
}
