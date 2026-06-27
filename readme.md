1: Explain the difference between any, unknown, and never types in TypeScript.

উত্তরঃ TypeScript-এ টাইপ সাফেটি (Type Safety) নিচ্ছিত করার জন্য বিভিন্ন ধরণের স্পেশাল টাইপ রয়েছে, তার মধ্যে আছে any, unknown এবং never টাইপ। এদের কাজ ভিন্ন রকমেরঃ

any টাইপঃ any টাইপ ব্যাবহার করে আমরা TypeScript কে বলতে পারি যে, TypeScript যেই ডাটা গ্রহণ করবে তার টাইপ যেকোনো কিছুই হতে পারে। যার ফলে আমরা যেকোনো ধরনের অপারেশান চালাতে পারি। এটি মূলত JavaScript এর মতো কাজ করে।

    let data:any = "hello";
    data = 10;
    এখানে ডাটা টাইপ প্রথমে any হওয়ার কারণে, ডাটা এর ভ্যালু string  থাকার পরেও, পরবর্তীতে নাম্বার পরিবর্তন করা গিয়েছে।

unknown টাইপঃ unknown টাইপ ও অনেকটা any টাইপ এর মতো যেকোনো গ্রহণ করে পারে কিন্তু পার্থক্য হলো unknown ভ্যালু এর উপর সরাসরি কনো অপারেশান চালানো যায় না। শুধুমাত্র type checking এর মাধ্যমে করা যায়।

    let value : unknown = "hello";

    // সরাসরি মেথড কল করা যাবে ন
    value.toUpperCase();

    // টাইপ চেক করে করা যাবে
    if (typeof value === "string") {
        // এটি করা যাবে
        console.log(value.toUpperCase());
    }

never টাইপঃ never টাইপ এমন একটি টাইপ কে নির্দেশ করে যার কনো অসিস্ত নেই। যখন কনো function কনো ভ্যালু রিটার্ন না করে, তখন তার টাইপ হয় never। এটি মূলত ErrorHandling এর জন্য ব্যাবহার করা হয়।

    function throwError(message:string): never {
        // এই function টি কোনোকিছু রিটার্ন করবে না
        throw new Error(message)
    }

//---------------//

2: What is the use of the keyof keyword in TypeScript? Provide an example.

উত্তরঃ TypeScript এ keyof হলো একটি ইনডেক্স টাইপ কোয়েরি অপারেটর (Index Type Query Operator)। এর মুল কাজ হলো, কনো একটি 
অবজেক্ট টাইপ বা ইন্টারফেস এর কী গুলে কে নিয়ে একটি union টাইপ তৈরি করা। 

    type User = {
        id: number;
        name: string;
        email: string;
    };

    type UserKeys = keyof User;
    // output: "id" | "name" | "email"

    function getUserProperty(user: User, key: keyof User) {
        return user[key];
    }
    const myUser: User = {id: 1, name: "John Doe", email: "johndoe@email.com" }
    
    const userName = getUserProperty(myUser, "name");
    // output: "John Doe"