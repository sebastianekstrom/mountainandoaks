import Alert from "components/Alert";

export const PokeTest = () => {
  return (
    <Alert
      description={
        <>
          You can do a <b>poke test</b> to see if the dough is perfectly
          proofed.
          <br />
          <br />
          Wet your finger and poke the dough lightly and observe what happens:
          <br />
          <br />
          <span className="ml-4 block">
            – Dough springs back <b>quickly</b> = underproofed
            <br />
            <br />– Dough springs back very <b>slowly</b> = perfect
            <br />
            <br />– Dough <b>never</b> springs back = overproofed
          </span>
        </>
      }
    />
  );
};
