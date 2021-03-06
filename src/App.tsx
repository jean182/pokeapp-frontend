import { ApolloProvider } from '@apollo/client';
import { client } from '@gql';
import Routes from '@router';

function App() {
  return (
    <ApolloProvider client={client}>
      <Routes />
    </ApolloProvider>
  );
}

export default App;
