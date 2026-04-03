import styled from "styled-components";
import { useRecentBookings } from "./useRecentBookings";
import Spinner from "../../ui/Spinner";
import { useRecentStays } from "./useRecentStays";
import Stats from "./Stats";
import useCabins from "../cabins/useCabins";
import SalesChart from "./SalesChart";
import DurationChart from "./DurationChart";
import TodayActivity from "../check-in-out/TodayActivity";

const StyledDashboardLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: auto 34rem auto;
  gap: 2.4rem;
  /* width: 100%; */

  @media (max-width: 1200px) {
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: auto auto auto auto;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto auto auto auto auto;
    gap: 1.6rem;
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
    grid-template-rows: auto auto auto auto auto auto;
    gap: 1.2rem;
  }
`;

function DashboardLayout() {
  const { getRecentBookings, isGettingRecentBookings } = useRecentBookings();

  const { numDays, isGettingStays, confirmStays } = useRecentStays();

  const { cabins, isLoading } = useCabins();

  if (isGettingRecentBookings || isGettingStays || isLoading)
    return <Spinner />;

  return (
    <StyledDashboardLayout>
      <Stats
        bookings={getRecentBookings}
        confirmStays={confirmStays}
        numDays={numDays}
        cabinCount={cabins.length}
      />

      <TodayActivity />

      <DurationChart confirmStays={confirmStays} />

      <SalesChart bookings={getRecentBookings} numDays={numDays} />
    </StyledDashboardLayout>
  );
}

export default DashboardLayout;
