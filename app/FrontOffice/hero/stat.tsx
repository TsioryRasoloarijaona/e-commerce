import {
  Stat,
  StatLabel,
  StatNumber,
  StatHelpText,
  StatArrow,
  StatGroup,
} from "@chakra-ui/react";

export default function StatHero() {
  return (
    <>
      <StatGroup className="text-white bg-black bg-opacity-70 p-5">
        <Stat>
          <StatLabel>total car</StatLabel>
          <StatNumber>2000+</StatNumber>
          <StatHelpText>
            <StatArrow type="increase" />
            23.36%
          </StatHelpText>
        </Stat>

        <Stat>
          <StatLabel>customer satisfait</StatLabel>
          <StatNumber>1500+</StatNumber>
          <StatHelpText>
            <StatArrow type="decrease" />
            9.05%
          </StatHelpText>
        </Stat>
        <Stat>
          <StatLabel>providers</StatLabel>
          <StatNumber>45 country</StatNumber>
          <StatHelpText>
            <StatArrow type="decrease" />
            9.05%
          </StatHelpText>
        </Stat>
        <Stat>
          <StatLabel>warranty</StatLabel>
          <StatNumber>years 5+</StatNumber>
          <StatHelpText>
            <StatArrow type="decrease" />
            9.05%
          </StatHelpText>
        </Stat>
      </StatGroup>
      ;
    </>
  );
}