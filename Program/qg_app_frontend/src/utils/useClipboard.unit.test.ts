import { expect, test } from "vitest";

import useClipboard from "@/utils/useClipboard";

const { toClipboard } = useClipboard();

test("toClipboard", async () => {
  const mockText = "test";
  const toClipboardPromise = toClipboard(mockText);

  await expect(toClipboardPromise).resolves.toBeTruthy();
  await expect(toClipboardPromise).resolves.toContain({ text: mockText });
});
