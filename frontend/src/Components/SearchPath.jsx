
import { useState } from "react";
import { Box, Button, Container, Input, Text, Flex, Image} from "@chakra-ui/react";
// import backgroundImage from "../Image/IMG2.jpeg";


const SearchPath = () => {
  const [searchResult, setSearchResult] = useState(""); 
  const [error, setError] = useState(""); 
  const [searchQuery, setSearchQuery] = useState(""); 

  const handleSearch = async (e,search) => {
    e.preventDefault();
    console.log(search);
    console.log(searchQuery);
    try {
      let query = "";
      switch (search) {
        case "PCMB":
          query = "Get detailed information about PCMB courses and career path after that";
          break;
        case "PCMC":
          query = "Get detailed information about PCMC courses and career path after that";
          break;
        case "PCME":
          query = "Get detailed information about PCME courses and career path after that";
          break;
          case "Arts":
          query = "Get detailed information about Arts courses and career path after that";
          break;
          case "Commerce":
          query = "Get detailed information about Commerce courses and career path after that";
          break;
        default:
          setError("Please enter a valid course name");
          return;
      }
      const res = await fetch("https://api.openai.com/v1/chat/completions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer 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",
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
      if (!res.ok) {
        throw new Error("Failed to fetch data");
      }
      const data = await res.json();
      setSearchResult(data.choices[0].message.content);
      setError("");
    } catch (error) {
      console.error("Error fetching data:", error);
      setError("Error fetching data. Please try again later.");
      setSearchResult("");
    }
  };

  return (
    <Flex direction="column" align="center" minH="100vh">
      <Box  w="100%" h="340px"marginTop="30px" className="searchcolor">
        <Container maxW="container.lg" p={5} textAlign="center">
          <Text as="h1" fontSize="3xl" fontWeight="bold" color="black" mb={5}>Enter Your Desired Course to Find The RoadMap</Text>
          <Text color="white"fontSize="2xl">Choosing a career is one of the most important decisions a person has to make in their life. It is so important because that is what we will have to do to support ourselves throughout life. Imagine being stuck in a dead end job and having to go to work every morning and dreading it.</Text>
        </Container>
      </Box>
      <Container maxW="container.lg" p={5} mt={-20}>
        <form onSubmit={(e)=>{handleSearch(e,searchQuery)}} className="mb-5 flex justify-center items-center">
          <Input
            type="text"
            className="search"
            placeholder="Enter the course name (PCMB, PCMC, PCME, Arts, Commerce)"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            size="md"
            mr={3}
            mb={10}
          
            textColor="black"
            fontWeight={"bold"}
          />
          <Button type="submit" colorScheme="red"  mb={10}>
            Search
          </Button>
        </form>
        {error && (
          <Box color="red.500" mb={2} textAlign="center">
            {error}
          </Box>
        )}
        {searchResult && (
          <Box border="1px solid" p={4}>
            <Text as="h2" fontSize="xl" fontWeight="bold" mb={2}>
              Career Path:
            </Text>
            <pre className="text-wrap">{searchResult}</pre>
          </Box>
        )}
      </Container>
     <Container maxW="container.lg" p={5}>
        <Text as="h2" fontSize="2xl" fontWeight="bold" mb={5}>Featured Courses</Text>
        <Flex flexWrap="wrap" justify="space-between">
          <Box maxW="32%" borderWidth="1px" borderRadius="lg" overflow="hidden" boxShadow="md" mb={5} height="400px">
            <Image src="https://source.unsplash.com/featured/?education" alt="Course" height="300px" />
            <Box p={5}>
              <Button fontSize="xl" fontWeight="semibold" mb={2}  onClick={(e)=>{handleSearch(e,"PCMB")}}>PCMB Course</Button>
              <Text color="gray.600">Physics, Chemistry, Maths, Biology.</Text>
            </Box>
          </Box>
          <Box maxW="32%" borderWidth="1px" borderRadius="lg" overflow="hidden" boxShadow="md" mb={5} height="400px">
            <Image src="https://source.unsplash.com/featured/?study" alt="Course" height="300px" />
            <Box p={5}>
              <Button fontSize="xl" fontWeight="semibold" mb={2}  onClick={(e)=>{handleSearch(e,"PCMC")}}>PCMC Course</Button>
              <Text color="gray.600">Physics, Chemistry, Maths, Computer.</Text>
            </Box>
          </Box>
          <Box maxW="32%" borderWidth="1px" borderRadius="lg" overflow="hidden" boxShadow="md" mb={5} height="400px">
            <Image src="https://source.unsplash.com/featured/?bulb" alt="Course" height="300px"/>
            <Box p={5}>
              <Button fontSize="xl" fontWeight="semibold" mb={2} onClick={(e)=>{handleSearch(e,"PCME")}}>PCME Course</Button>
              <Text color="gray.600">Physics, Chemistry, Maths, Electronics.</Text>
            </Box>
          </Box>
          <Box maxW="33%" borderWidth="1px" borderRadius="lg" overflow="hidden" boxShadow="md" mb={5} height="400px">
            <Image src="https://source.unsplash.com/featured/?history" alt="Course" height="300px" />
            <Box p={5}>
              <Button fontSize="xl" fontWeight="semibold" mb={2} onClick={(e)=>{handleSearch(e,"Arts")}}>Arts Course</Button>
              <Text color="gray.600">Psychology, Economics, Philosophy, History, Sociology, Political Science.</Text>
            </Box>
          </Box>
          <Box maxW="32%" borderWidth="1px" borderRadius="lg" overflow="hidden" boxShadow="md" mb={5} height="400px">
            <Image src="https://source.unsplash.com/featured/?currancy" alt="Course" height="300px"/>
            <Box p={5}>
              <Button fontSize="xl" fontWeight="semibold" mb={2} onClick={(e)=>{handleSearch(e,"Commerce")}}>Commerce Course</Button>
              <Text color="gray.600"> Accountancy, Economics, Business Studies, Statistics.</Text>
            </Box>
          </Box>
          <Box maxW="32%" borderWidth="1px" borderRadius="lg" overflow="hidden" boxShadow="md" mb={5} height="400px">
            <Image src="https://source.unsplash.com/featured/?learning" alt="Course" height="300px" />
            <Box p={5}>
              <Button fontSize="xl" fontWeight="semibold" mb={2} onClick={(e)=>{handleSearch(e,"Commerce")}}>MPSC</Button>
              <Text color="gray.600">Maharashtra Public Service Commission.</Text>
            </Box>
          </Box>
        </Flex>
      </Container>
    </Flex>
  );
};

export default SearchPath;
