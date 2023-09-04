
type ThreadCategory = "THREAD" | "QNA"

interface Thread {
  id: number;
	title: string;
	category: ThreadCategory;
	creationDate: string;
	description: string;
	creator: User
}

interface QNAThread extends Thread {
	category: "QNA"
	isAnswered: boolean
	commentAnswerId?: number
}