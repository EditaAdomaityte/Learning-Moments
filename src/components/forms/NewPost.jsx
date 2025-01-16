import { useNavigate } from "react-router-dom";
import "./Forms.css";
import { useEffect } from "react";
import {
  createNewPost,
  getAllTopics,
} from "../../services/postServices/postServices";
import { useState } from "react";

export const NewPost = ({ currentUser }) => {
  const navigate = useNavigate();
  const [allTopics, setAllTopics] = useState([]);
  const [selectedTopic, setSelectedTopic] = useState(0);
  const [Title, setTitle] = useState("");
  const [Body, setBody] = useState("");

  useEffect(() => {
    getAllTopics().then((topicArray) => {
      setAllTopics(topicArray);
    });
  }, []);

  const handleSave = (event) => {
    event.preventDefault();

    const createdPost = {
      topicId: parseInt(selectedTopic),
      userId: currentUser.id,
      title: Title,
      date: new Date(),
      body: Body,
    };
    createNewPost(createdPost).then(() => {
      navigate("/MyPosts");
    });
  };

  return (
    <form className="form-group">
      <h2>New Post</h2>

      <fieldset>
        <select
          value={selectedTopic}
          onChange={(event) => setSelectedTopic(event.target.value)}
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
            onChange={(event) => {
              const newTitle = event.target.value;
              setTitle(newTitle);
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
            onChange={(event) => {
              const newBody = event.target.value;
              setBody(newBody);
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
