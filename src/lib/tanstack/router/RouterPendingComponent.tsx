interface RouterPendingComponentProps {}

export function RouterPendingComponent({}: RouterPendingComponentProps) {
  return (
    <div className="flex min-h-screen w-full flex-col items-center justify-center gap-2">
      <div className="skeleton flex min-h-[50vh] h-[90%] w-[90%] items-center justify-center rounded-2xl bg-base-300">
        <img src="/favicon.png" className="" />
      </div>
    </div>
  );
}
