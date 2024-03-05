import { Box, Button } from "@chakra-ui/react";
import { useRef, useState } from "react";
import SearchPath from "./SearchPath";
import LoadingToast from "./LoadingToast";
const XthRoadMap = () => {
  const [test1English, setTest1English] = useState(87);
  const [test1Hindi, setTest1Hindi] = useState(77);
  const [test1MotherLang, setTest1Motherlang] = useState(90);
  const [test1Science, setTest1Science] = useState(95);
  const [test1SocialScience, setTest1SocialScience] = useState(74);
  const [test1Maths, setTest1Maths] = useState(99);
  const [test2English, setTest2English] = useState(54);
  const [test2Hindi, setTest2Hindi] = useState(47);
  const [test2MotherLang, setTest2Motherlang] = useState(69);
  const [test2Science, setTest2Science] = useState(81);
  const [test2SocialScience, setTest2SocialScience] = useState(94);
  const [test2Maths, setTest2Maths] = useState(95);
  const [test3English, setTest3English] = useState(48);
  const [test3Hindi, setTest3Hindi] = useState(46);
  const [test3MotherLang, setTest3Motherlang] = useState(98);
  const [test3Science, setTest3Science] = useState(99);
  const [test3SocialScience, setTest3SocialScience] = useState(84);
  const [test3Maths, setTest3Maths] = useState(54);
  const [test4English, setTest4English] = useState(95);
  const [test4Hindi, setTest4Hindi] = useState(71);
  const [test4MotherLang, setTest4Motherlang] = useState(77);
  const [test4Science, setTest4Science] = useState(90);
  const [test4SocialScience, setTest4SocialScience] = useState(33);
  const [test4Maths, setTest4Maths] = useState(54);
  const [result, setResult] = useState("");
  const [selectedCourse, setSelectedCourse] = useState("");
  const [test1Diff, setTest1Diff] = useState("Medium");
  const [test2Diff, setTest2Diff] = useState("Medium");
  const [test3Diff, setTest3Diff] = useState("Medium");
  const [test4Diff, setTest4Diff] = useState("Medium");
  const [finalDiff, setFinalDiff] = useState("Medium");
  const paragraphRef = useRef(null);
  const [isLoading, setIsLoading] = useState(false);
  const findRoadmap = async (e) => {
    setIsLoading(true);
    e.preventDefault();
    setResult("");
    if (
      test1English > 100 ||
      test1Hindi > 100 ||
      test1MotherLang > 100 ||
      test1Science > 100 ||
      test1SocialScience > 100 ||
      test1Maths > 100 ||
      test2English > 100 ||
      test2Hindi > 100 ||
      test2MotherLang > 100 ||
      test2Science > 100 ||
      test2SocialScience > 100 ||
      test2Maths > 100 ||
      test3English > 100 ||
      test3Hindi > 100 ||
      test3MotherLang > 100 ||
      test3Science > 100 ||
      test3SocialScience > 100 ||
      test3Maths > 100 ||
      test4English > 100 ||
      test4Hindi > 100 ||
      test4MotherLang > 100 ||
      test4Science > 100 ||
      test4SocialScience > 100 ||
      test4Maths > 100
    ) {
      alert("Marks should be below 100");
    } else {
      let query = `Test Series 1 : English - ${test1English}/100,  Hindi - ${test1Hindi}/100, Mother Tongue  - ${test1MotherLang}/100  ,
       science - ${test1Science}/100  , social science - ${test1SocialScience}/100,   maths - ${test1Maths}/100,   difficulty level - ${test1Diff}

      Test Series 2 : English ${test2English}/100,  Hindi  -  ${test2Hindi}/100, Mother Tongue -  ${test2MotherLang}/100  ,
       science - ${test2Science}/100  , social science  -  ${test2SocialScience}/100,   maths  - ${test2Maths}/100,   difficulty level  - ${test2Diff}

      Test Series 3 : English  -  ${test3English}/100,  Hindi  -  ${test3Hindi}/100, Mother Tongue  -  ${test3MotherLang}/100  ,
       science - ${test3Science}/100  , social science  -  ${test3SocialScience}/100,   maths  -  ${test3Maths}/100,   difficulty level  - ${test3Diff}
 
      Test Series 4 : English  -  ${test4English}/100,  Hindi  -  ${test4Hindi}/100,  -  Mother Tongue ${test4MotherLang}/100  ,
       science - ${test4Science}/100  ,  social science  -  ${test4SocialScience}/100,   maths  - ${test4Maths}/100,   difficulty level  - ${test4Diff}
 
      Passing marks for each subject is 35,

      These are test series

        Final test diffculty level will be Medium

      Note for You : if 4 test average for a  subject is less than 35, it will have a 95% chance of failing in the final exam

      In PUC there are these streams : 
      PCMB Need strong knowledge in science and maths and English
      PCMC Need strong knowledge in science and maths and English
      PCME Need strong knowledge in science and maths  
      PCMS  Need strong knowledge in science and maths
      Commerce need strong knowledge of maths
      Arts need strong knowledge in social science and English, Hindi, and Mother Tongue

      Predict my  final test marks and round up
      Suggest me top 3 course based on my score   
      `;

      console.log("asdasdsadsad", import.meta.env.VITE_api_Key);
      try {
        const res = await fetch("https://api.openai.com/v1/chat/completions", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${import.meta.env.VITE_api_Key}`,
          },
          body: JSON.stringify({
            model: "gpt-3.5-turbo",
            messages: [
              {
                role: "user",
                content: query,
              },
            ],
          }),
        });
        console.log(import.meta.env.VITE_api_Key)

        const data = await res.json();

        setIsLoading(false);
        setResult(data.choices[0].message.content);
      } catch (error) {
        setIsLoading(false);
        console.error("Error:", error.message);
      }
    }
  };

  return (
    <>
      {isLoading && <LoadingToast />}
      <form
        onSubmit={findRoadmap}
        className="flex p-5 justify-around flex-wrap  "
      >
        <div className="marks test1 tests w-2/5 flex  flex-col gap-1 px-5">
          <h1>Test Series 1</h1>
          <label>English Marks : </label>
          <input
            type="number"
            value={test1English}
            min={0}
            max={100}
            placeholder="marks"
            onChange={(e) => setTest1English(e.target.value)}
          />
          <label>Hindi Marks : </label>{" "}
          <input
            type="number"
            value={test1Hindi}
            min={0}
            max={100}
            placeholder="marks"
            onChange={(e) => setTest1Hindi(e.target.value)}
          />
          <label>Mother Tongue Marks : </label>{" "}
          <input
            type="number"
            value={test1MotherLang}
            min={0}
            max={100}
            placeholder="marks"
            onChange={(e) => setTest1Motherlang(e.target.value)}
          />
          <label>Science Marks : </label>
          <input
            type="number"
            min={0}
            max={100}
            value={test1Science}
            placeholder="marks"
            onChange={(e) => setTest1Science(e.target.value)}
          />
          <label>Social Science Marks : </label>
          <input
            type="number"
            min={0}
            max={100}
            value={test1SocialScience}
            placeholder="marks"
            onChange={(e) => setTest1SocialScience(e.target.value)}
          />
          <label>Maths Marks : </label>
          <input
            type="number"
            min={0}
            max={100}
            value={test1Maths}
            placeholder="marks"
            onChange={(e) => setTest1Maths(e.target.value)}
          />
          <label>Difficulty</label>
          <select
            placeholder="Difficulty"
            value={test1Diff}
            onChange={(e) => setTest1Diff(e.target.value)}
            className="w-fit"
          >
            <option>Easy</option>
            <option>Medium</option>
            <option>Hard</option>
          </select>
        </div>
        <div className="test2  marks  tests  w-2/5  gap-1 flex  flex-col">
          <h1>Test Series 2</h1>
          <label>English Marks : </label>
          <input
            type="number"
            value={test2English}
            min={0}
            max={100}
            placeholder="marks"
            onChange={(e) => setTest2English(e.target.value)}
          />
          <label>Hindi Marks : </label>{" "}
          <input
            type="number"
            value={test2Hindi}
            min={0}
            max={100}
            placeholder="marks"
            onChange={(e) => setTest2Hindi(e.target.value)}
          />
          <label>Mother Tongue Marks : </label>{" "}
          <input
            type="number"
            value={test2MotherLang}
            min={0}
            max={100}
            placeholder="marks"
            onChange={(e) => setTest2Motherlang(e.target.value)}
          />
          <label>Science Marks : </label>
          <input
            type="number"
            min={0}
            max={100}
            value={test2Science}
            placeholder="marks"
            onChange={(e) => setTest2Science(e.target.value)}
          />
          <label>Social Science Marks : </label>
          <input
            type="number"
            min={0}
            max={100}
            value={test2SocialScience}
            placeholder="marks"
            onChange={(e) => setTest2SocialScience(e.target.value)}
          />
          <label>Maths Marks : </label>
          <input
            type="number"
            min={0}
            max={100}
            value={test2Maths}
            placeholder="marks"
            onChange={(e) => setTest2Maths(e.target.value)}
          />
          <label>Difficulty</label>
          <select
            placeholder="Difficulty"
            value={test2Diff}
            onChange={(e) => setTest2Diff(e.target.value)}
            className="w-fit"
          >
            <option value={"Easy"}>Easy</option>
            <option value={"Medium"}>Medium</option>
            <option value={"Hard"}>Hard</option>
          </select>
        </div>
        <div className="test3 marks  tests  w-2/5  gap-1 flex  flex-col ">
          <h1>Test Series 3</h1>
          <label>English Marks : </label>
          <input
            type="number"
            value={test3English}
            min={0}
            max={100}
            placeholder="marks"
            onChange={(e) => setTest3English(e.target.value)}
          />
          <label>Hindi Marks : </label>{" "}
          <input
            type="number"
            value={test3Hindi}
            min={0}
            max={100}
            placeholder="marks"
            onChange={(e) => setTest3Hindi(e.target.value)}
          />
          <label>Mother Tongue Marks : </label>{" "}
          <input
            type="number"
            value={test3MotherLang}
            min={0}
            max={100}
            placeholder="marks"
            onChange={(e) => setTest3Motherlang(e.target.value)}
          />
          <label>Science Marks : </label>
          <input
            type="number"
            min={0}
            max={100}
            value={test3Science}
            placeholder="marks"
            onChange={(e) => setTest3Science(e.target.value)}
          />
          <label>Social Science Marks : </label>
          <input
            type="number"
            min={0}
            max={100}
            value={test3SocialScience}
            placeholder="marks"
            onChange={(e) => setTest3SocialScience(e.target.value)}
          />
          <label>Maths Marks : </label>
          <input
            type="number"
            min={0}
            max={100}
            value={test3Maths}
            placeholder="marks"
            onChange={(e) => setTest3Maths(e.target.value)}
          />
          <label>Difficulty</label>
          <select
            placeholder="Difficulty"
            value={test3Diff}
            onChange={(e) => setTest3Diff(e.target.value)}
            className="w-fit"
          >
            <option>Easy</option>
            <option>Medium</option>
            <option>Hard</option>
          </select>
        </div>
        <div className="test4  marks  tests  w-2/5  gap-1 flex  flex-col">
          <h1>Test Series 4</h1>
          <label>English Marks : </label>
          <input
            type="number"
            value={test4English}
            min={0}
            max={100}
            placeholder="marks"
            onChange={(e) => setTest4English(e.target.value)}
          />
          <label>Hindi Marks : </label>{" "}
          <input
            type="number"
            value={test4Hindi}
            min={0}
            max={100}
            placeholder="marks"
            onChange={(e) => setTest4Hindi(e.target.value)}
          />
          <label>Mother Tongue Marks : </label>{" "}
          <input
            type="number"
            value={test4MotherLang}
            min={0}
            max={100}
            placeholder="marks"
            onChange={(e) => setTest4Motherlang(e.target.value)}
          />
          <label>Science Marks : </label>
          <input
            type="number"
            min={0}
            max={100}
            value={test4Science}
            placeholder="marks"
            onChange={(e) => setTest4Science(e.target.value)}
          />
          <label>Social Science Marks : </label>
          <input
            type="number"
            min={0}
            max={100}
            value={test4SocialScience}
            placeholder="marks"
            onChange={(e) => setTest4SocialScience(e.target.value)}
          />
          <label>Maths Marks : </label>
          <input
            type="number"
            min={0}
            max={100}
            value={test4Maths}
            placeholder="marks"
            onChange={(e) => setTest4Maths(e.target.value)}
          />
          <label>Difficulty</label>
          <select
            placeholder="Difficulty"
            value={test4Diff}
            onChange={(e) => setTest4Diff(e.target.value)}
            className="w-fit"
          >
            <option>Easy</option>
            <option>Medium</option>
            <option>Hard</option>
          </select>
        </div>
      </form>
      <div className="flex justify-around py-10 items-center">
        <div>
          <label>Final Exam Difficulty : </label>
          <select
            placeholder="Final Exam Difficulty"
            value={finalDiff}
            onChange={(e) => setFinalDiff(e.target.value)}
            className="w-fit"
          >
            <option>Easy</option>
            <option>Medium</option>
            <option>Hard</option>
          </select>
        </div>
        {/* <button
          className="w-1/10 bg-red-500  rounded-xl px-5 py-3 text-2xl  "
          onClick={findRoadmap}
        >
          Submit
        </button> */}
        <Button colorScheme="blue" size="lg" onClick={findRoadmap}>
          Submit
        </Button>
      </div>

      {result && (
        <Box
          ref={paragraphRef}
          border="1px solid"
          p={4}
          m="20px auto"
          maxW="80%"
        >
          <pre className="text-wrap">{result}</pre>
        </Box>
      )}
      {result && <SearchPath />}
    </>
  );
};

export default XthRoadMap;
