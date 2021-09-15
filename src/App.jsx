import Article from "./components/Article";
import {Content, Title} from "./components/index";

function App() {
  return (
    <div>
      <Article
        title={'デュフフ'}
        content={'コポォ'}
      />
      <Title title={props.title} />
      <Content content={props.content} />
    </div>
  );
};

export default App;