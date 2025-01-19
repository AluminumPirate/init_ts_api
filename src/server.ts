import express, { Application, Request, Response } from 'express';

const app: Application = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.get('/', (req: Request, res: Response) => {
	res.status(200).json({ message: 'I am a TypeScript API!' });
});

app.get('/health', (req: Request, res: Response) => {
	res.status(200).json({ message: "I'm Alive! Let me get back to sleep" });
});

app.listen(port, () => {
	// eslint-disable-next-line no-console
	console.log(`Server is running on port ${port}`);
});
