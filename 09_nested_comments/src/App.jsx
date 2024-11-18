import "./App.css";
import Comments from "./components/Comments";

const data = [
  {
    username: "Sachin Tendulkar",
    comment:
      "Choose the method that best fits your needs depending on whether you want a new array or to modify the original array directly.",
    replies: [
      {
        username: "Rahul dravid",
        comment:
          "Another way to add elements of one array to another in place is by using splice javascript Copy code",
        replies: [
          {
            username: "Rahul dravid",
            comment:
              "Another way to add elements of one array to another in place is by using splice javascript Copy code",
            replies: [
              {
                username: "Rahul dravid",
                comment: "TopLevel comment",
              },
              {
                username: "Saurabh Ganguli",
                comment: "TopLevel comment",
              },
            ],
          },
          {
            username: "Saurabh Ganguli",
            comment: "TopLevel comment",
          },
        ],
      },
      {
        username: "Saurabh Ganguli",
        comment: "TopLevel comment",
      },
    ],
  },
  {
    username: "Rahul dravid",
    comment: "If this command shows an error or no files are listed, it means",
    replies: [
      {
        username: "Rahul dravid",
        comment:
          "Another way to add elements of one array to another in place is by using splice javascript Copy code",
        replies: [
          {
            username: "Rahul dravid",
            comment: "TopLevel comment",
          },
          {
            username: "Saurabh Ganguli",
            comment: "TopLevel comment",
          },
        ],
      },
      {
        username: "Saurabh Ganguli",
        comment: "TopLevel comment",
      },
    ],
  },
  {
    username: "Saurabh Ganguli",
    comment:
      "oken directs Jest to start from the project’s root directory, making it easier to",
    replies: [
      {
        username: "Rahul dravid",
        comment:
          "Another way to add elements of one array to another in place is by using splice javascript Copy code",
        replies: [
          {
            username: "Rahul dravid",
            comment: "TopLevel comment",
          },
          {
            username: "Saurabh Ganguli",
            comment: "TopLevel comment",
          },
        ],
      },
      {
        username: "Saurabh Ganguli",
        comment: "TopLevel comment",
      },
    ],
  },
];

function App() {
  return (
    <div>
      <Comments comments={data}/>
    </div>
  );
}

export default App;
