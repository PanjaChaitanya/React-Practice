import { useState, useEffect } from "react";

const SearchFilter = () => {
  const [searchData, setSearchData] = useState("");
  const [companiesData, setCompaniesData] = useState([]);
  const [sort, setSort] = useState("a-z");

  useEffect(() => {
    fetch("/companies.json")
      .then((res) => res.json())
      .then((data) => setCompaniesData(data))
      .catch((err) => console.log(err));
  }, []);

  const filteredData = companiesData.filter((item) =>
    item.name.toLowerCase().includes(searchData.toLowerCase().trim())
  );

  const sorted = [...filteredData].sort((a, b) =>
    sort === "a-z" ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name)
  );

  return (
    <div
      style={{
        display: "flex",
        alignItems: "flex-start",
        justifyContent: "center",
        gap: "30px",
        padding: "40px",
        backgroundColor: "#fafafa",
        minHeight: "100vh",
        fontFamily: "Arial, sans-serif",
      }}
    >
      {/* LEFT: Search and Results Section */}
      <div
        style={{
          width: "45%",
          backgroundColor: "#ffffff",
          borderRadius: "12px",
          boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
          padding: "20px",
          height: "700px",
          overflowY: "auto",
        }}
      >
        <h2 style={{ color: "#2c3e50", textAlign: "center" }}>🔍 Search Filter</h2>

        {/* Search & Sort Controls */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "10px",
            marginBottom: "20px",
          }}
        >
          <input
            type="text"
            placeholder="Search company..."
            value={searchData}
            onChange={(e) => setSearchData(e.target.value)}
            style={{
              padding: "8px 12px",
              borderRadius: "6px",
              border: "1px solid #ccc",
              width: "60%",
              outline: "none",
            }}
          />
          <select
            value={sort}
            onChange={(e) => setSort(e.target.value)}
            style={{
              padding: "8px",
              borderRadius: "6px",
              border: "1px solid #ccc",
              backgroundColor: "#fff",
              outline: "none",
            }}
          >
            <option value="a-z">Sort A–Z</option>
            <option value="z-a">Sort Z–A</option>
          </select>
        </div>

        {/* Data Display */}
        {sorted.length > 0 ? (
          sorted.map((item) => (
            <div
              key={item.id}
              style={{
                backgroundColor: "#f9f9f9",
                padding: "15px",
                marginBottom: "10px",
                borderRadius: "8px",
                boxShadow: "0 0 5px rgba(0,0,0,0.05)",
              }}
            >
              <h3 style={{ margin: "0 0 6px", color: "#34495e" }}>{item.name}</h3>
              <p style={{ margin: "4px 0" }}>👥 Employees: {item.employees}</p>
              <p style={{ margin: "4px 0" }}>🏢 Industry: {item.industry}</p>
            </div>
          ))
        ) : (
          <p style={{ textAlign: "center", color: "#999" }}>No data found</p>
        )}
      </div>

      {/* RIGHT: Learning Block */}
      <div
        style={{
          width: "45%",
          backgroundColor: "#ffffff",
          padding: "25px",
          borderRadius: "12px",
          boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
          overflowY: "auto",
          height: "700px",
        }}
      >
        <h2 style={{ color: "#d23669", textAlign: "center" }}>
          📘 What i Learnt from This Code
        </h2>
        <ul style={{ lineHeight: "1.8", fontSize: "15px", color: "#2f3640" }}>
          <li>
            <strong>useState Hook:</strong> Manage state like{" "}
            <code>searchData</code>, <code>companiesData</code>, and{" "}
            <code>sort</code>.
          </li>
          <li>
            <strong>useEffect Hook:</strong> Run side effects (like fetching data)
            when the component mounts.
          </li>
          <li>
            <strong>Fetch API:</strong> Retrieve JSON data using{" "}
            <code>fetch()</code> and handle promises with{" "}
            <code>.then()</code> / <code>.catch()</code>.
          </li>
          <li>
            <strong>Array Filtering:</strong> Build live search using{" "}
            <code>filter()</code> and string methods like{" "}
            <code>.includes()</code>.
          </li>
          <li>
            <strong>Array Sorting:</strong> Sort data alphabetically with{" "}
            <code>localeCompare()</code> for A–Z or Z–A.
          </li>
          <li>
            <strong>Controlled Components:</strong> Sync input values with state
            using <code>value</code> and <code>onChange</code>.
          </li>
          <li>
            <strong>Conditional Rendering:</strong> Show a fallback message when no
            data matches.
          </li>
          <li>
            <strong>Mapping Arrays:</strong> Display dynamic lists using{" "}
            <code>map()</code> and unique keys.
          </li>
          <li>
            <strong>JSX & Component Structure:</strong> Learn clean, readable
            React component design.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SearchFilter;
