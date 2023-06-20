import { APIGatewayProxyHandler, APIGatewayProxyResult } from "aws-lambda"

const IDOLS = [
    {id: "1", name: "morino rinze"},
    {id: "2", name: "saijo jyuri"},
    {id: "3", name: "arisugawa natsuha"},
    {id: "4", name: "sonoda chiyoko"},
    {id: "4", name: "komiya kaho"},
]

/** GET /idols */
export const getIdolsHandler: APIGatewayProxyHandler = async (event) => {
    console.log(
        "pathParameters = " + JSON.stringify(event.pathParameters, undefined, 2)
        )
        return createResponse(IDOLS);
}

/** GET /idols/{id} */
export const getIdolHandler: APIGatewayProxyHandler = async (event) => {
    console.log(
      "pathParameters = " + JSON.stringify(event.pathParameters, undefined, 2)
    )
    const id = event.pathParameters?.["id"]
    return createResponse(IDOLS.find((idol) => idol.id === id))
  }

const createResponse = (body: any): APIGatewayProxyResult => {
    return {
        statusCode: 200,
        body: JSON.stringify(body),
        headers: {
            "Access-Control-Allow-Origin:": "*",
        },
    }
}