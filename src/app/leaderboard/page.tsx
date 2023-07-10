import { Container } from "@/components/container";
import { Table } from '@/components/table';
import { rankingColumn, rankingDataSource } from "@/@fake_db/leaderboard";

export interface ColumnType {
    key: string;
    title: string;
    dataIndex: string;
    width?: number;
    align?: "left" | "center" | "right";
    render?: React.ReactElement;
}

export default () => {
    return (
        <div className="leaderboard-container">
            <div className="section h-screen over-hide">
                <div className="parallax" style={{ backgroundImage: 'url(assets/img/leaderboard-bg.jpg)', backgroundPosition: '50% -50px', filter: 'grayscale(.5)' }}></div>
                <div className="grey-fade-over grey-fade-over-more"></div>
                <div className="pt-[130px]">
                    <Container title="Leaderboard">
                        <Table column={rankingColumn} dataSource={rankingDataSource} />
                    </Container>
                </div>
            </div>
        </div>
    )
}