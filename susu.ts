export type PayoutStatus = "waiting" | "next" | "paid";

export type Member = {
  id: number;
  name: string;
  phone?: string;
  payoutStatus: PayoutStatus;
};

export type Group = {
  id: number;
  name: string;
  contributionAmount: number;
  members: Member[];
};

export type Contribution = {
  id: number;
  groupId: number;
  memberId: number;
  amount: number;
  date: string;
};

export function totalContributed(contributions: Contribution[]): number {
  return contributions.reduce(
    (total, contribution) => total + contribution.amount,
    0,
  );
}

export function findMember(
  members: Member[],
  id: number,
): Member | undefined {
  return members.find((member) => member.id === id);
}

export function membersWithStatus(
  members: Member[],
  status: PayoutStatus,
): Member[] {
  return members.filter((member) => member.payoutStatus === status);
}

export const members: Member[] = [
  { id: 1, name: "Ama", phone: "555-0101", payoutStatus: "paid" },
  { id: 2, name: "Kwame", payoutStatus: "next" },
  { id: 3, name: "Esi", phone: "555-0103", payoutStatus: "waiting" },
];

export const susuGroup: Group = {
  id: 1,
  name: "Market Women Circle",
  contributionAmount: 50,
  members,
};

export const contributions: Contribution[] = [
  { id: 1, groupId: 1, memberId: 1, amount: 50, date: "2026-10-01" },
  { id: 2, groupId: 1, memberId: 2, amount: 50, date: "2026-10-01" },
  { id: 3, groupId: 1, memberId: 3, amount: 50, date: "2026-10-01" },
  { id: 4, groupId: 1, memberId: 1, amount: 50, date: "2026-10-08" },
  { id: 5, groupId: 1, memberId: 2, amount: 50, date: "2026-10-08" },
];

const member = findMember(members, 2);
if (member) {
  console.log(`Found member: ${member.name}`);
} else {
  console.log("Member not found");
}

console.log(`Total contributed: ${totalContributed(contributions)}`);
console.log(`Members waiting: ${membersWithStatus(members, "waiting").length}`);
