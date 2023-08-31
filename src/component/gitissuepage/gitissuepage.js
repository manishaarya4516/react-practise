// import React from "react";

// export const GitIssuePage = () => {
//   return <div>GitIssuePage</div>;
// };
// // src/components/IssueList.js

import React, { useState, useEffect } from "react";

const GitIssuePage = () => {
  const [issues, setIssues] = useState([]);

  useEffect(() => {
    fetch(" https://api.github.com/repos/OWNER/REPO/issues")
      .then((response) => response.json())
      .then((data) => setIssues(data));
    console.log("mmm");
  }, []);

  return (
    <div>
      <h1>GitHub Issues</h1>
      <ul>
        {issues.map((issue) => (
          <li key={issue.id}>
            <a href={issue.html_url} target="_blank" rel="noopener noreferrer">
              {issue.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default GitIssuePage;
