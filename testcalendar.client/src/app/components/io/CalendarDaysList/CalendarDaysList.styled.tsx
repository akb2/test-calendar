import styled, { css } from "styled-components";
import type { CalendarDaysListItemProps } from "./CalendarDaysList.types";

const DayItemInMonthStyle = ({ $inMonth }: CalendarDaysListItemProps) =>
  $inMonth &&
  css`
    background-color: #ccc;
  `;

const DayItemCurrentStyle = ({ $isCurrent }: CalendarDaysListItemProps) =>
  $isCurrent &&
  css`
    background-color: #f00;
  `;

export const CalendarDaysListRoot = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 8px;
`;

export const CalendarDaysListItem = styled.div<CalendarDaysListItemProps>`
  display: block;
  position: relative;
  padding-bottom: 100%;
  border-radius: 5px;
  border: 1px solid #ccc;

  ${DayItemInMonthStyle}
  ${DayItemCurrentStyle}
`;
