import React, { useEffect, useState } from "react";

const App = () => {
  const [file, setFile] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [data, setData] = useState(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setUploading(true);
      const formData = new FormData();
      formData.append("file", file);
      const res = await fetch("http://localhost:3000/api/upload", {
        method: "POST",
        body: formData,
      });

      const data = await res.json();
      getQuestions()
      setUploading(false);
    } catch (error) {
      setUploading(false);
      console.error(error);
    }
  };

  const getQuestions = async () => {
    try {
      const res = await fetch("http://localhost:3000/api/questions");
      const data = await res.json();
      console.log(data);
      setData(data);
    } catch (error) {
      console.error(error);
    }
  };
  const handleClearQuestions = async () => {
    try {
      const res = await fetch("http://localhost:3000/api/clear");
      const data = await res.json();
      alert(data.message);
      getQuestions();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getQuestions();
  }, []);

  return (
    <div className="grid grid-cols-2 gap-4 py-10 ">
      <div className="border px-5 pt-10 flex flex-col pb-10">
        <button
          onClick={handleClearQuestions}
          type="button"
          className="text-white self-center bg-[#3b5998] hover:bg-[#3b5998]/90 focus:ring-4 focus:outline-none focus:ring-[#3b5998]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#3b5998]/55 me-2 mb-2"
        >
          Clear the questions
        </button>
        <p className="font-semibold text-center p-5">Upload docx file</p>

        <div className="flex gap-4 w-2/3 mx-auto">
          <input
            onChange={handleFileChange}
            className="p-3 border border-gray-300 rounded w-full"
            type="file"
            id="docxFile"
          />
          {/* Additional form fields for question data */}

          <button
            type="button"
            disabled={uploading}
            onClick={handleSubmit}
            className="p-3 text-green-700 border border-green-700 rounded uppercase hover:shadow-lg disabled:opacity-80"
          >
            {uploading ? "Uploading..." : "Upload"}
          </button>
        </div>
      </div>
      <div className="border pb-10">
       
        {data ? (
          data.map((item, index) => {
            return (
              <div
                key={index + item.option1}
                className="block max-w-sm p-6 m-auto my-5 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
              >
                <h5 className="mb-2 text-lg font-bold tracking-tight text-gray-900 dark:text-white">
                  {item.question}
                </h5>
                <p className="font-normal text-gray-700 dark:text-gray-400">
                  {item.option1}
                </p>
                <p className="font-normal text-gray-700 dark:text-gray-400">
                  {item.option2}
                </p>
                <p className="font-normal text-gray-700 dark:text-gray-400">
                  {item.option3}
                </p>
                <p className="font-normal text-gray-700 dark:text-gray-400">
                  {item.option4}
                </p>
                <p className="font-normal text-gray-700 dark:text-gray-400">
                  <b>Correct Answer</b> : {item.correctAnswer}
                </p>
              </div>
            );
          })
        ) : (
          <h2>No Questions </h2>
        )}
      </div>
    </div>
  );
};

export default App;
