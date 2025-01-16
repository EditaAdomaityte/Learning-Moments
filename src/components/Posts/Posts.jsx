import { useEffect, useState } from "react";
import {
  getAllPosts,
  getAllTopics,
} from "../../services/postServices/postServices";
import "./PostList.css";
import { PostSearchBar } from "./PostSearchBar";
import { PostList } from "./PostList";
import { Link } from "react-router-dom";

export const Posts = () => {
  const [allPosts, setAllPosts] = useState([]);
  const [filteredPosts, setFilteredPosts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [allTopics, setAllTopics] = useState([]);
  const [selectedTopic, setSelectedTopic] = useState("Select a Topic");

  useEffect(() => {
    getAllPosts().then((postArray) => {
      setAllPosts(postArray);
    });
  }, []);

  useEffect(() => {
    getAllTopics().then((topicArray) => {
      setAllTopics(topicArray);
    });
  }, []);

  // Filter posts based on search term and selected topic
  useEffect(() => {
    let filtered = allPosts;

    // Apply search filter
    if (searchTerm) {
      filtered = filtered.filter((post) =>
        post.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    // Apply topic filter
    if (selectedTopic !== "Select a Topic") {
      //we check if a topic is actually selected,This means we only filter if the user has picked a real topic (not the default "Select a Topic" option
      filtered = filtered.filter((post) => {
        //we filter the posts, starts the filtering process on our posts array. For each post, the following logic will run.
        const topic = allTopics.find((top) => top.id === post.topicId); //For each post, we find its matching topic..find() searches through allTopics to find the topic whose id matches the post's topicId
        return topic.name === selectedTopic; //This compares the name of the topic we found with the topic the user selected in the dropdown. If they match, the post is kept in the filtered array. If they don't match, the post is filtered out.
      });
    }
    setFilteredPosts(filtered);
  }, [searchTerm, allPosts, selectedTopic, allTopics]);

  return (
    <>
      <div className="posts">
        <h2>All Posts</h2>
        <div>
          <PostSearchBar
            setSearchTerm={setSearchTerm}
            allTopics={allTopics}
            selectedTopic={selectedTopic}
            setSelectedTopic={setSelectedTopic}
          />
        </div>
        {filteredPosts.map((post) => {
          return (
            <Link to={`/posts/${post.id}`} key={post.id}>
              <PostList post={post} />{" "}
            </Link>
          );
        })}
      </div>
    </>
  );
};
