import React, { Fragment } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import groupBy from "lodash.groupby";

import FormatedDay from "./FormatedDay";
import CallCard from "./CallCard";

const DayCallsWrapper = styled.div`
  padding: 1em;
`;

function DayCalls({ data }) {
  console.log(data[0].date);
  console.log(
    new Intl.DateTimeFormat("en-US", {
      day: "numeric",
      month: "long",
    }).format(new Date(data[0].date))
  );
  const dataGroup = groupBy(
    data.sort(
      (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()
    ),
    ({ date: strDate }) => {
      const callDate = new Date(strDate);
      return new Date(
        callDate.getFullYear(),
        callDate.getMonth(),
        callDate.getDate()
      ).toString();
    }
  );

  const dayGroup = Object.entries(dataGroup)
    .sort(([a], [b]) => new Date(a).getTime() - new Date(b).getTime())
    .reverse()
    .map(([key, data], i) => {
      return (
        <Fragment key={i}>
          <FormatedDay date={key} />
          {data
            .sort(
              ({ date: a }, { date: b }) =>
                new Date(a).getTime() - new Date(b).getTime()
            )
            .reverse()
            .map(({ id, ...call }) => (
              <CallCard key={id} {...call} />
            ))}
        </Fragment>
      );
    });
  return <DayCallsWrapper>{dayGroup}</DayCallsWrapper>;
}

DayCalls.propTypes = {
  data: PropTypes.array, // Probably need a better description
};

export default DayCalls;
