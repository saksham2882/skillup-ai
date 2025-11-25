import { db } from "@/config/db";
import { usersTable } from "@/config/schema";
import { eq } from "drizzle-orm";
import { NextResponse } from "next/server";

export async function POST(req) {
    try {
        const { email, name } = await req.json();

        // If user already exists
        const user = await db.select().from(usersTable).where(eq(usersTable.email, email));

        if (user?.length > 0) {
            return NextResponse.json({
                message: "User already exists",
                user: user[0]
            }, { status: 200 });
        }

        // If not then Create new user
        const newUser = await db.insert(usersTable).values({
            name,
            email
        }).returning(usersTable);

        return NextResponse.json({
            message: "User created successfully",
            user: newUser[0]
        }, { status: 201 });

    } catch (error) {
        return NextResponse.json({
            message: "Internal Server Error",
            error: error.message
        }, { status: 500 });
    }
}