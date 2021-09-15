import {useState} from "react";
import {Content, Title, PublishButton} from "./index";

const Article = (props) => {
  const [isPublished, setIsPublished] = useState(false)
  const publishArticle = () => {
    setIsPublished(true)
  }

  return (
    <div>
      <Title title={props.title} />
      <Content content={props.content} />
      <button onClick={() => setIsPublished(true)}>公開</button>
      <PublishButton isPublished={isPublished} onClick={publishArticle}/>
    </div>
  );
};

export default Article;