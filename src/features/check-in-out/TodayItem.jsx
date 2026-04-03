import styled from "styled-components";
import Tag from "../../ui/Tag";
import Button from "../../ui/Button";
import { Flag } from "../../ui/Flag";
import { Link } from "react-router-dom";
import CheckoutButton from "./CheckoutButton";

const StyledTodayItem = styled.li`
  display: grid;
  grid-template-columns: 9rem 2rem 1fr 7rem 9rem;
  gap: 1.2rem;
  align-items: center;

  font-size: 1.4rem;
  padding: 0.8rem 0;
  border-bottom: 1px solid var(--color-grey-100);

  &:first-child {
    border-top: 1px solid var(--color-grey-100);
  }

  @media (max-width: 1024px) {
    grid-template-columns: 8rem 2rem 1fr 6rem 7rem;
    gap: 1rem;
    font-size: 1.2rem;
  }

  @media (max-width: 480px) {
    /* grid-template-columns: 1fr; */
    display: grid;
    grid-template-columns: 1fr 15px 1fr 1fr 1fr;
    overflow: hidden;
    justify-content: center;
    gap-x: 1rem;
    padding: 0.8rem 0;
    font-size: 1.2rem;
    & > * {
      display: flex;
      justify-content: center;
      align-items: center;
      text-align: center;
    }
  }
`;

const Guest = styled.div`
  font-weight: 500;
`;
function TodayItem({ activity }) {
  const { id, status, guests, numNights } = activity;

  return (
    <StyledTodayItem>
      {status === "unconfirmed" && <Tag type="green">Arriving</Tag>}
      {status === "checked-in" && <Tag type="blue">Departing</Tag>}

      <Flag src={guests.countryFlag} alt={`flag of ${guests.country}`} />
      <Guest>{guests.fullName}</Guest>
      <div>{numNights}</div>

      {status === "unconfirmed" && (
        <Button
          size="small"
          variation="primary"
          as={Link}
          to={`/checkin/${id}`}
        >
          Check in
        </Button>
      )}
      {status === "checked-in" && <CheckoutButton bookingId={id} />}
    </StyledTodayItem>
  );
}

export default TodayItem;
