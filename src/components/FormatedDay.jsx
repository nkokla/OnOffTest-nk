import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const DayHeader = styled.div`
  color: var(--gray);
`;

const FormatedDay = ({ date }) => {
  console.log(date);
  const formatedDate = new Intl.DateTimeFormat("en-US", {
    day: "numeric",
    month: "long",
  }).format(new Date(date));
  const now = new Date();
  const yesterday = new Date(now).setDate(now.getDate() - 1);

  const todayLabel = new Intl.DateTimeFormat("en-US", {
    day: "numeric",
    month: "long",
  }).format(now);
  const yesterdayLabel = new Intl.DateTimeFormat("en-US", {
    day: "numeric",
    month: "long",
  }).format(yesterday);
  const dayLabel =
    formatedDate === todayLabel
      ? "Today"
      : formatedDate === yesterdayLabel
      ? "yesterday"
      : formatedDate;

  return <DayHeader>{dayLabel}</DayHeader>;
};

FormatedDay.propTypes = {
  date: PropTypes.string,
};

export default FormatedDay;
