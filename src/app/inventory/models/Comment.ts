export class Comment {
  id: number;
  commentsThreadId: number;
  TS: Date;
  parentCommentId: number;
  addTS: Date;
  adderId: number;
  modTS: Date;
  modderId: number;
  isRemoved: boolean;
}
