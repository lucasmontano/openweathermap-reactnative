import styled from 'styled-components/native';

export const Container = styled.View`
  margin-top: 10px;
`;

export const Week = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 10px 40px;
`;

export const WeekDayContainer = styled.View`
  flex-direction: column;
  margin-left: 15px;
`;

export const DayContainer = styled.View`
  flex-direction: column;
`;

export const Day = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: #121212;
`;

export const TemperatureContainer = styled.View`
  flex-direction: row;
`;

export const MaxTemperature = styled.Text`
  font-size: 20px;
  margin-right: 5px;
  color: #7159c1;
`;

export const MinTemperature = styled.Text`
  color: #aaacb0;
`;

export const RainContainer = styled.View`
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.Text`
  font-size: 16px;
  color: #aaacb0;
`;

export const Description = styled.Text`
  font-size: 16px;
`;

export const HumidtyContainer = styled.View`
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-left: 20px;
`;

export const ConteinerIcon = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const ContainerDescription = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;
