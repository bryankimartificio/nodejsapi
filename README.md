# nodejs101
Registering User:
<b>ENDPOINT:</b> http://localhost:3000/v1/register<br>
<b>HEADER:<b> Content-Type:application/json<br>
<b>DATA:</b><br>
{
	"name": "bryan kim artificio",
	"email": "bryankim.artificio@gmail.com",
	"password": "12345"
}
<b>RESPONSE:</b><br>
{
    "statuscode": 200,
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVkMTM1Zjg0MzY2MjUwMWEyNGIwZTQzYSIsImlhdCI6MTU2MTU1MDcyNCwiZXhwIjoxNTYxNjM3MTI0fQ.OcGineSdLV8YaFOmdekM7F8dt6zesW-rX2AAZKks1xc"
}