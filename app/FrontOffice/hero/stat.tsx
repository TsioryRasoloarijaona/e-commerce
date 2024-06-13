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
      <StatGroup className="text-white bg-black bg-opacity-70 p-5 grid grid-cols-2">
        <Stat>
          <StatLabel>total car</StatLabel>
          <StatNumber>2000+</StatNumber>
          
        </Stat>

        <Stat>
          <StatLabel>customer</StatLabel>
          <StatNumber>1500+</StatNumber>
          
        </Stat>
        <Stat>
          <StatLabel>providers</StatLabel>
          <StatNumber>45 +</StatNumber>
          
        </Stat>
        <Stat>
          <StatLabel>warranty</StatLabel>
          <StatNumber>5+</StatNumber>
          
        </Stat>
        
        
      </StatGroup>
      ;
    </>
  );
}
