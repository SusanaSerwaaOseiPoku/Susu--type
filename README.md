# Susu Circle: TypeScript Types

This folder is a standalone TypeScript practice project. It uses `typescript` to check the code, `tsx` to run it, and strict type-checking is enabled in `tsconfig.json`.

Run the sample:

```bash
npm run susu
```

Check types without generating files:

```bash
npx tsc --noEmit
```

## Types in plain words

- `PayoutStatus` only allows `"waiting"`, `"next"`, or `"paid"` for a member's payout position.
- `Member` describes a person in the circle. Their `phone` is optional, and their payout position must use `PayoutStatus`.
- `Group` describes a Susu circle, its contribution amount, and its members.
- `Contribution` records one member's payment to a group, including the amount and date.

`totalContributed` adds the amounts in a list of contributions. `findMember` may return `undefined`, so the example checks the result before reading the member's name. `membersWithStatus` filters members using a valid `PayoutStatus`.

## Practice Notes

An invalid `"pending"` payout status was corrected to `"waiting"` because `"pending"` is not in `PayoutStatus`.

**Validation:** `npx tsc --noEmit` completed with no diagnostics.

The `PayoutStatus` union restricts members to valid payout states, and the `if` check narrows `Member | undefined` before the code reads the member's name.
