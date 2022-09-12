import { useForm, SubmitHandler } from "react-hook-form";
import { SearchFormContainer } from "./styles";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useContext } from "react";
import { GithubUserContext } from "../../../../contexts/githubUserContext";

const SearFormSchema = z.object({
  query: z.string(),
});

type SearchFormInputs = z.infer<typeof SearFormSchema>;

export function SearchForm() {
  const { FetchGithubUser } = useContext(GithubUserContext);

  const { register, handleSubmit, reset } = useForm<SearchFormInputs>({
    resolver: zodResolver(SearFormSchema),
  });

  async function handleChangeInputText(text: SearchFormInputs) {
    await FetchGithubUser(text.query);

    reset();
  }

  return (
    <SearchFormContainer onSubmit={handleSubmit(handleChangeInputText)}>
      <input type="text" placeholder="Buscar conteúdo" {...register("query")} />
    </SearchFormContainer>
  );
}
