import teamMembersData from './members'; // Use a different name for the imported data
import { useQuery } from 'react-query';

export function useTeamMembers() {
  const fetchTeamMembers = async () => {
    // Simulate fetching 
    return teamMembersData;
  };

  const { data: teamMembers, isLoading } = useQuery('teamMembers', fetchTeamMembers);

  return { teamMembers, isLoading };
}