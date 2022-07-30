import styled from 'styled-components'

export const CountryListContainer = styled.ul`
  list-style-type: none;
  height: 40vh;
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
  padding: 10px;
`
export const VisitedCountryImage = styled.img`
  width: 100%;
`
export const VisitedCountryBottomContainer = styled.div`
  display: flex;
  justify-content: space-between;
`
export const VisitedCountryUlItem = styled.ul`
  display: flex;
  list-style-type: none;
  flex-wrap: wrap;
`
export const VisitedCountryLiItem = styled.li`
  width: 30%;
  margin: 10px;
`
export const VisitedCountriesList = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;
  border: 0px;
  padding: 10px;
  width: 90%;
  margin: 5px;
  margin-left: 30px;
  max-height: 50vh;
  overflow-y: scroll;
`
export const NoVisitedText = styled.p`
  color: #ffffff;
  font-family: 'Roboto';
  font-size: 40px;
  font-weight: 600;
  margin: 5px;
  align-self: center;
`
export const MainContainer = styled.div``
