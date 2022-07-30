import {ListItem, VisitButton} from './styledComponents'

const CountryListItem = props => {
  const {countryItem, changeVisit} = props
  const {id, name, isVisited} = countryItem

  const clickToChangeVisit = () => {
    changeVisit(id)
  }

  return (
    <div>
      <ListItem key={id}>
        <p>{name}</p>
        {!isVisited ? (
          <VisitButton type="button" onClick={clickToChangeVisit}>
            Visit
          </VisitButton>
        ) : (
          <p>Visited</p>
        )}
      </ListItem>
    </div>
  )
}
export default CountryListItem
