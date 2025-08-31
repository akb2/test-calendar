import styled from "styled-components";
import { ClassCurrent, ClassDisabled } from "../../../data/ClassNames";
import { PrimaryColor } from "../../../data/Theme";
import { ClassToday, DefaultColor } from "./CalendarDaysList.const";

export const CalendarDaysListRoot = styled.div`
  display: grid;
  grid-template-columns: repeat(7, minmax(100px, 160px));
  gap: 8px;
  width: fit-content;
  max-width: 100%;
  margin: 0 auto;
  position: relative;
`;

export const CalendarDaysListItem = styled.div`
  display: block;
  position: relative;
  padding-bottom: 100%;
  border-radius: 5px;
  border: 1px solid ${DefaultColor};

  &.${ClassCurrent} {
    background-color: ${DefaultColor};

    &.${ClassToday} {
      background-color: ${PrimaryColor};
    }
  }

  &.${ClassToday} {
    border-color: ${PrimaryColor};
  }

  &.${ClassDisabled} {
    opacity: 0.5;
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

  &.${ClassCurrent} {
    color: gray;

    &.${ClassToday} {
      color: white;
    }
  }

  &:not(.${ClassCurrent}).${ClassToday} {
    color: ${PrimaryColor};
  }
`;
