import { useForm } from 'react-hook-form';
import { useRouter } from 'next/router';
import { Button, Checkbox, FormControl, Input, InputGroup, InputRightElement } from '@chakra-ui/react';

// Todo: Remove Recoil
import { useRecoilValue } from 'recoil';
import { brightFuncState, loopState, satFuncState, colorSchemeState, startingColorState } from '@/components/store/state';

import useStore from "@/store/useStore"

export default function SnippetForm({ nickname }) {

  const user = nickname;

  const [hex, scheme, loop, brightFunc, satFunc] = useStore('hex, scheme, loop, brightFunc, satFunc')

  /* // Todo: Remove Recoil
  const startingColor = useRecoilValue(startingColorState).hex();
  const colorScheme = useRecoilValue(colorSchemeState)
  const loop = useRecoilValue(loopState)
  const brightFunc = useRecoilValue(brightFuncState)
  const satFunc = useRecoilValue(satFuncState)
  */

  const { register, handleSubmit } = useForm();

  const router = useRouter();

  const createSnippet = async (data) => {
    const { name, isPublic } = data;
    try {
      await fetch('/api/createSnippet', {
        method: 'POST',
        body: JSON.stringify({ name, isPublic, user, startingColor: hex, colorScheme: scheme, loop, brightFunc, satFunc }),
        headers: { 'Content-Type': 'application/json' }
      })
      router.push('/');
    } catch (err) {
      // console.error(err);
    }
  };

  return (
    <form onSubmit={handleSubmit(createSnippet)}>
      <FormControl>
        <Checkbox defaultIsChecked {...register("isPublic", {
            required: "Your preset will be public!"
          })}>Public</Checkbox>
        <InputGroup>
          <Input placeholder="Preset Name" {...register("name", {
            required: "This is your preset name!"
          })} />
          <InputRightElement>
            <Button type="submit" width="40em">Save</Button>
          </InputRightElement>
        </InputGroup>
      </FormControl>
    </form>
  );
}
