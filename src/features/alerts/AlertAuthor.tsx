import { useAppSelector } from "@/app/hooks"

import { selectUserById } from "../users/usersSlice"

interface AlertAuthorProps {
  userId: string
}

export const AlertAuthor = ({ userId }: AlertAuthorProps) => {
  const author = useAppSelector(state => selectUserById(state, userId))

  return <span>by {author?.name ?? "Unkown author"}</span>
}
