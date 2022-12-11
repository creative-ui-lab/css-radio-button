import RadioCircle from "styles/Circle"

const App = () => (
  <div tw="grid gap-[8px]">
    <div tw="flex items-center gap-x-[10px]">
      <RadioCircle checked />
      <button type="button">Checked</button>
    </div>
    <div tw="flex items-center gap-x-[10px]">
      <RadioCircle />
      <button type="button">Unchecked</button>
    </div>
    <div tw="flex items-center gap-x-[10px]">
      <RadioCircle disabled />
      <button type="button">disabled</button>
    </div>
  </div>
)

export default App
