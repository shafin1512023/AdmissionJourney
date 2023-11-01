import "./Tabs.style.css";

import Card from "../Card/Card";

const Tabs = () => {
    return (
        <div className="tabs">
            <Card heading="অধ্যায় সমুহ" description="এখানে আমাদের শর্ট সিলেবাসের অন্তর্ভুক্ত সকল অধ্যায়ের তালিকা করা আছে। অর্থাৎ Admission এর জন্য যে যে চ্যাপ্টার পড়া লাগবে সেগুলো।" />
            <Card heading="রুটিন" description="কখন কোন অধ্যায় পরবো তা নিয়ে একটু হাল্কা পাতলা আলাপ চারিতা করা হয়েছে এখানে আর কি।" />
        </div>
    );
};

export default Tabs;
