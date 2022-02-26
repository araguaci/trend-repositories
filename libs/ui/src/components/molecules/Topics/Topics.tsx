import { StyledTopics } from './style';
import { Badge } from '../../atoms';
import { FC } from 'react';
import { GithubRepository } from '@trend-repositories/api-interfaces';

type TopicsProps = Pick<GithubRepository, 'topics'>;

const Topics: FC<TopicsProps> = ({ topics }) => {
  return (
    <StyledTopics>
      {topics?.map((topic) => (
        <Badge
          key={topic}
          href={`https://github.com/search?q=topic:${topic}&type=Repositories`}
        >
          {topic}
        </Badge>
      ))}
    </StyledTopics>
  );
};

export default Topics;
