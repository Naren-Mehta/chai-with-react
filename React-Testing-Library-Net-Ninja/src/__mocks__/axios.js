const mockResponse = {
    data: {
      results: [
        {
          name: {
            first: "Laith",
            last: "Harb",
          },
          picture: {
            large: "https://randomuser.me/api/portraits/men/59.jpg",
          },
          login: {
            username: "ThePhonyGOAT",
          },
        },
        {
          name: {
            first: "John",
            last: "Doe",
          },
          picture: {
            large: "https://randomuser.me/api/portraits/men/1.jpg",
          },
          login: {
            username: "johnny",
          },
        },
      ],
    },
  };
  
  const mockAxios = {
    get: jest.fn().mockResolvedValue(mockResponse),
  };
  
  export default mockAxios;
  