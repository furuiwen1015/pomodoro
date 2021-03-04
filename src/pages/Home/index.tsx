import { memo, useEffect, useRef } from 'react';

//私有常量

//可抽离的逻辑处理函数/组件

let Home = (_props: IProps) => {
    //变量声明、解构

    //组件状态
    const canvasRef = useRef<HTMLCanvasElement>(null);

    //网络IO

    //数据转换

    //逻辑处理函数

    //组件Effect
    useEffect(() => {
        const HOURS = [
            '1',
            '2',
            '3',
            '4',
            '5',
            '6',
            '7',
            '8',
            '9',
            '10',
            '11',
            '12',
        ];

        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        const width = canvas.width,
            height = canvas.height;
        const r = 100;

        ctx.translate(width / 2, height / 2);

        ctx.arc(0, 0, r, 0, 2 * Math.PI);
        ctx.fillStyle = 'gray';
        ctx.fill();

        const rad = (2 * Math.PI) / HOURS.length;
        HOURS.forEach((value, index) => {
            ctx.font = '24px STheiti, SimHei';
            ctx.fillStyle = 'white';
            ctx.fillText(
                value,
                (r - 10) * Math.cos(rad * index),
                (r - 10) * Math.sin(rad * index)
            );
        });
    }, []);

    return (
        <div>
            <canvas ref={canvasRef} width={300} height={300} />
        </div>
    );
};

//props类型定义
interface IProps {}

//prop-type定义，可选

Home = memo(Home);
export { Home };
