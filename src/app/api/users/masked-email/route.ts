import { NextRequest, NextResponse } from 'next/server';

interface User {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  avatar: string;
}

export async function GET(req: NextRequest) {
  try {
    const users: User[] = [];
    let page = 1;
    let totalPages = 1;

    do {
      const response = await fetch(`https://reqres.in/api/users?page=${page}`);
      const { data, total_pages } = await response.json();

      const maskedEmail = data.map((user: User) => ({
        ...user,
        email: user.email.replace(/(?<=.{2}).(?=.*@)/g, '*'),
      }));

      users.push(...maskedEmail);
      totalPages = total_pages;
      page += 1;
    } while (page <= totalPages);

    return NextResponse.json(users);
  } catch (error) {
    return NextResponse.json({ message: 'Failed to fetch users', error }, { status: 500 });
  }
}
