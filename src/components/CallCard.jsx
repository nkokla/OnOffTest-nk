import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Card = styled.div`
  display: flex;
  flex-direction: row;
  background-color: var(--white);
  box-shadow: 0 0.2em 0.2em 0 rgba(0, 0, 0, 0.3);
  border-radius: 1rem;
  margin: 0 0 1rem;
  padding: 1rem;
  border: 1px solid transparent;

  &:hover {
    border: 1px solid var(--teal);
  }
`;

const FakeAvatar = styled.div.attrs({ children: "#" })`
  font-size: 2.5rem;
`;
const Avatar = styled.div.attrs({ children: <FakeAvatar /> })`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: 3.5rem;
  height: 3.5rem;
  color: var(--pink);
  border: 3px solid;
  border-radius: 50%;
  box-sizing: border-box;
  font-size: 2rem;
`;

const CallWrapper = styled.div`
  flex: 1;
  padding: 0.5rem 1em;
`;
const PhoneNumberWrapper = styled.div`
  font-size: 1.2em;
`;
const PhoneTypeWrapper = styled.div`
  font-size: 0.85rem;
  line-height: 1.5em;
  color: var(--gray);
`;
const TimeWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  font-size: 1.1rem;
  color: var(--gray);
`;

function CallCards({ avatar, phoneNumber, date: dateProps, phoneType }) {
  const date = new Date(dateProps);
  const formatedDate = new Intl.DateTimeFormat("en-US", {
    timeStyle: "short",
  }).format(date);
  return (
    <Card>
      <Avatar />
      <CallWrapper>
        <PhoneNumberWrapper>+{phoneNumber}</PhoneNumberWrapper>
        <PhoneTypeWrapper>{phoneType}</PhoneTypeWrapper>
      </CallWrapper>
      <TimeWrapper>{formatedDate}</TimeWrapper>
    </Card>
  );
}

CallCards.propTypes = {
  avatar: PropTypes.string,
  phoneNumber: PropTypes.string,
  date: PropTypes.string,
  phoneType: PropTypes.string,
};
CallCards.defaultProps = {
  phoneNumber: "33766746033",
  date: "2021-04-06T22:20:06+0000",
  phoneType: "Mobile",
};

export default CallCards;
