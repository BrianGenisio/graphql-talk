##  React Example <!-- .element: data-theme="ka-content" -->

```js
const SessionRow = ({session}) => <tr scope="row">
    <td>{getSpeakers(session)} </td>
    <th>{session.title}</th>
    <td>{session.abstract}</td>
</tr>;

const Sessions = ({data}) => {
    const sessions = data.sessions || [];
    return <div>
      <h1>Sessions at CodeMash</h1>

      <table className="table">
          <thead>
              <tr>
                  <th>Speaker</th>
                  <th>Title</th>
                  <th>Abstract</th>
              </tr>
          </thead>
          <tbody>
              {sessions.map(session =>
                  <SessionRow key={session.id} session={session} />
              )}
          </tbody>
      </table>
    </div>;
}

const getSessions = gql`
query {
  sessions {
    id
    speakers {
      firstName
      lastName
    }
    title
    abstract
  }

}`;
const SessionsWithData = graphql(getSessions)(Sessions);


function getSpeakers(session) {
    const speakers = session.speakers || [];

    return speakers
        .map(speaker => `${speaker.firstName} ${speaker.lastName}`)
        .join(', ');
}
```
