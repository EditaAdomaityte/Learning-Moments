import { useEffect, useState } from "react";
import "./Forms.css";
import {
  getAllTopics,
  getPostByPostId,
} from "../../services/postServices/postServices";
import { useParams } from "react-router-dom";

export const EditPost = ({ currentUser }) => {
  const [post, setPost] = useState({});
  const [allTopics, setAllTopics] = useState([]);
  const [selectedTopic, setSelectedTopic] = useState(0);

  const { postId } = useParams();

  useEffect(() => {
    getPostByPostId(postId).then((data) => {
      const postObj = data[0];
      setPost(postObj);
    });
  }, [postId]);

  useEffect(() => {
    getAllTopics().then((topicArray) => {
      setAllTopics(topicArray);
    });
  }, []);

  const handleSave = () => {};

  return (
    <form className="form-group">
      <h2>Update Post</h2>
      <fieldset>
        {" "}
        <select
          value={post.topicId}
          name="topicId"
          onChange={(event) => {
            const copy = { ...post }; //creating a copy of state object. ... spreads all properties of employee
            copy[event.target.name] = event.target.value; //setting the specialty
            setPost(copy);
          }}
        >
          <option value="Select a Topic"> Select a Topic</option>
          {allTopics.map((topic) => (
            <option key={topic.id} value={topic.id}>
              {topic.name}
            </option>
          ))}
        </select>
      </fieldset>
      <fieldset>
        <div className="form-group">
          <label>Title</label>
          <input
            className="form-control"
            type="text"
            value={post.title ? post.title : ""}
            onChange={(event) => {
              const copy = { ...post }; //creating a copy of state object. ... spreads all properties of employee
              copy.title = event.target.value; //setting the specialty
              setPost(copy);
            }}
          />
        </div>
      </fieldset>
      <fieldset>
        <div className="form-group">
          <label>Body</label>
          <input
            className="form-control"
            type="text"
            required
            value={post.body ? post.body : ""}
            onChange={(event) => {
              const copy = { ...post }; //creating a copy of state object. ... spreads all properties of employee
              copy.body = event.target.value; //setting the specialty
              setPost(copy);
            }}
          />
        </div>
      </fieldset>
      <fieldset>
        <div className="form-group">
          <button className="form-btn btn-primary" onClick={handleSave}>
            Save Post
          </button>
        </div>
      </fieldset>
    </form>
  );
};
