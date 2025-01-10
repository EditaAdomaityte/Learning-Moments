

export const PostSearchBar = ({
  setSearchTerm,
  allTopics,
  selectedTopic,
  setSelectedTopic,
}) => {
  return (
    <div className="filter">
      <input
        onChange={(event) => {
          setSearchTerm(event.target.value);
        }}
        type="text"
        placeholder="Search Posts"
        className="post-search"
      />
      <select 
        value={selectedTopic} 
        onChange={(event)=>setSelectedTopic(event.target.value)}>
            <option value="Select a Topic"> Select a Topic
            </option>
                {allTopics.map((topic) => (
            <option key={topic.id} value={topic.name}>
                {topic.name}
            </option>
        ))}
      </select>
    </div>
  );
};
