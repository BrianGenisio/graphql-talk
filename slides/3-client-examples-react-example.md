##  React Example <!-- .element: data-theme="ka-content" -->

```js
const PersonRow = ({person}) => <tr scope="row">
    <th>{person.name}</th>
    <td>{person.height}</td>
    <td>{person.homeworld.name}</td>
</tr>;

const People = ({data}) => {
    const people = data.allPeople && data.allPeople.people || [];
    return <div>
      <h1>People in the Star Wars universe</h1>

      <table className="table">
          <thead>
              <tr>
                  <th>Name</th>
                  <th>Height</th>
                  <th>Homeworld</th>
              </tr>
          </thead>
          <tbody>
              {people.map(person =>
                  <PersonRow key={person.id} person={person} />
              )}
          </tbody>
      </table>
    </div>;
}

const getPeople = gql`
query {
  allPeople {
    people {
      id
      name
      height
      homeworld {
        name
      }
    }
  }
}`;
const PeopleWithData = graphql(getPeople)(People);
```
