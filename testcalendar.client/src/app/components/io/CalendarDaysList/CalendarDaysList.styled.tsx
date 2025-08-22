import styled, { css } from "styled-components";
import { PrimaryColor } from "../../../data/Theme";
import { DefaultColor } from "./CalendarDaysList.const";
import type { CalendarDaysListItemProps } from "./CalendarDaysList.types";

const DayItemCurrentInMonthStyle = ({
  $inMonth,
  $isCurrent,
}: CalendarDaysListItemProps) =>
  $isCurrent &&
  $inMonth &&
  css`
    background-color: ${PrimaryColor};
  `;

const DayItemCurrentOutMonthStyle = ({
  $inMonth,
  $isCurrent,
}: CalendarDaysListItemProps) =>
  $isCurrent &&
  !$inMonth &&
  css`
    border-color: ${PrimaryColor};
  `;

const DayItemInMonthStyle = ({ $inMonth }: CalendarDaysListItemProps) =>
  $inMonth &&
  css`
    background-color: ${DefaultColor};
  `;

const DayItemNumberInMonthHighLight = ({
  $inMonth,
  $isCurrent,
}: CalendarDaysListItemProps) =>
  $inMonth &&
  $isCurrent &&
  css`
    color: white;
  `;

const DayItemNumberOutMonthHighLight = ({
  $inMonth,
  $isCurrent,
}: CalendarDaysListItemProps) =>
  !$inMonth &&
  $isCurrent &&
  css`
    color: white;
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
  border: 1px solid ${DefaultColor};

  ${DayItemInMonthStyle}
  ${DayItemCurrentInMonthStyle}
  ${DayItemCurrentOutMonthStyle}
`;

export const CalendarDaysListItemNumber = styled.span<CalendarDaysListItemProps>`
  position: absolute;
  display: inline-block;
  top: 3px;
  right: 8px;
  font-size: 24px;
  font-weight: bold;
  color: black;

  ${DayItemNumberInMonthHighLight};
  ${DayItemNumberOutMonthHighLight};
`;
