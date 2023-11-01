import "./Tabs.style.css";
import Card from "../Card/Card";
import { Link } from "react-router-dom";

const Tabs = () => {
    const icon = (
        <svg
            style={{ width: 80, height: 80 }}
            xmlns="http://www.w3.org/2000/svg"
            id="Layer_1"
            data-name="Layer 1"
            viewBox="0 0 24 24"
            width="512"
            height="512"
        >
            <path d="M12,0A12,12,0,1,0,24,12,12.013,12.013,0,0,0,12,0Zm0,22A10,10,0,1,1,22,12,10.011,10.011,0,0,1,12,22ZM7,16H9v.6A3.237,3.237,0,0,0,12,20a3.237,3.237,0,0,0,3-3.4V16h2V14H7Zm6,.6c0,.662-.411,1.4-1,1.4s-1-.738-1-1.4V16h2Zm4.625-8.819L16.1,9l1.524,1.219-1.25,1.562L12.9,9l3.476-2.781ZM6.375,10.219,7.9,9,6.375,7.781l1.25-1.562L11.1,9,7.625,11.781Z" />
        </svg>
    );

    return (
        <div className="tabs">
            <Link to={"subjects"}>
                <Card
                    heading="অধ্যায় সমুহ"
                    description="এখানে আমাদের শর্ট সিলেবাসের অন্তর্ভুক্ত সকল অধ্যায়ের তালিকা করা আছে। অর্থাৎ Admission এর জন্য যে যে চ্যাপ্টার পড়া লাগবে সেগুলো।"
                />
            </Link>
            <Card
                heading="রুটিন"
                description="কখন কোন অধ্যায় পরবো তা নিয়ে একটু হাল্কা পাতলা আলাপ চারিতা করা হয়েছে এখানে আর কি।"
            />
            <Card
                heading={icon}
                description="এই কার্ডটা শুধু টেস্ট করার জন্য বানানো হইছে। এটা তোমার জন্য নয়। 😏"
            />
        </div>
    );
};

export default Tabs;
