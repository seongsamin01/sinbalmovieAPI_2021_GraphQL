import { GraphQLServer} from "graphql-yoga";

const server = new GraphQLServer({});

server.start(() => console.log("그래프큐엘 서버 작동 중..."))