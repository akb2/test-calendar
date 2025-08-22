import styled from "styled-components";
import { PrimaryColor } from "../../../data/Theme";
import { DefaultColor } from "./CalendarDaysList.const";

export const CalendarDaysListRoot = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 8px;
`;

export const CalendarDaysListItem = styled.div`
  display: block;
  position: relative;
  padding-bottom: 100%;
  border-radius: 5px;
  border: 1px solid ${DefaultColor};

  &.current {
    background-color: ${DefaultColor};

    &.today {
      background-color: ${PrimaryColor};
    }
  }

  &.today {
    border-color: ${PrimaryColor};
  }
`;

export const CalendarDaysListItemNumber = styled.span`
  position: absolute;
  display: inline-block;
  top: 3px;
  right: 8px;
  font-size: 24px;
  font-weight: bold;
  color: lightgray;

  &.current {
    color: gray;

    &.today {
      color: white;
    }
  }

  &:not(.current).today {
    color: ${PrimaryColor};
  }
`;
